<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use App\Models\Book;
use App\Models\Category;

class BookController extends Controller implements HasMiddleware
{
    /**
     * Define middleware untuk mengatur hak akses tiap metode.
     */
    public static function middleware()
    {
        return [
            new Middleware('permission:books index', only: ['index']),
            new Middleware('permission:books create', only: ['create', 'store']),
            new Middleware('permission:books edit', only: ['edit', 'update']),
            new Middleware('permission:books delete', only: ['destroy']),
        ];
    }

    /**
     * Tampilkan daftar buku dengan filter pencarian dan relasi kategori.
     */
    public function index(Request $request)
    {
        $books = Book::with('categories')
            ->when($request->search, function ($query) use ($request) {
                $query->where('title', 'like', '%' . $request->search . '%')
                    ->orWhere('author', 'like', '%' . $request->search . '%')
                    ->orWhere('publisher', 'like', '%' . $request->search . '%')
                    ->orWhere('year', 'like', '%' . $request->search . '%');
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Books/Index', [
            'books'   => $books,
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Tampilkan form pembuatan buku.
     */
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Books/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Simpan data buku baru ke database.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'         => 'required|min:3|max:255',
            'author'        => 'required|min:3|max:255',
            'publisher'     => 'required|min:3|max:255',
            'year'          => 'required|integer|min:1900|max:2025',
            'category_ids'  => 'required|array',
            'category_ids.*'=> 'exists:categories,id',
        ]);

        $book = Book::create([
            'title'     => $request->title,
            'author'    => $request->author,
            'publisher' => $request->publisher,
            'year'      => $request->year,
        ]);

        // Attach relasi kategori
        $book->categories()->attach($request->category_ids);

        return to_route('books.index')->with('success', 'Book created successfully.');
    }

    /**
     * Tampilkan form edit buku.
     */
    public function edit(Book $book)
    {
        $book->load('categories');
        $categories = Category::all();

        return Inertia::render('Books/Edit', [
            'book'       => $book,
            'categories' => $categories,
        ]);
    }

    /**
     * Update data buku.
     */
    public function update(Request $request, Book $book)
    {
        $request->validate([
            'title'         => 'required|min:3|max:255',
            'author'        => 'required|min:3|max:255',
            'publisher'     => 'required|min:3|max:255',
            'year'          => 'required|integer|min:1900|max:2025',
            'category_ids'  => 'required|array',
            'category_ids.*'=> 'exists:categories,id',
        ]);

        $book->update([
            'title'     => $request->title,
            'author'    => $request->author,
            'publisher' => $request->publisher,
            'year'      => $request->year,
        ]);

        // Sync kategori
        $book->categories()->sync($request->category_ids);

        return to_route('books.index')->with('success', 'Book updated successfully.');
    }

    /**
     * Hapus buku.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return back()->with('success', 'Book deleted successfully.');
    }
}
