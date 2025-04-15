<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use App\Models\Category;

class CategoryController extends Controller implements HasMiddleware
{
    /**
     * Define middleware untuk mengatur hak akses tiap metode.
     */
    public static function middleware()
    {
        return [
            new Middleware('permission:categories index', only: ['index']),
            new Middleware('permission:categories create', only: ['create', 'store']),
            new Middleware('permission:categories edit', only: ['edit', 'update']),
            new Middleware('permission:categories delete', only: ['destroy']),
        ];
    }

    /**
     * Display a listing of the books.
     */
    public function index(Request $request)
    {
        //  get categories
        $categories = Category::select('id', 'name')
            ->when($request->search,fn($search) => $search->where('name', 'like', '%'.$request->search.'%'))
            ->latest()
            ->paginate(6)->withQueryString();

        // render view
        return inertia('Categories/Index', ['categories' => $categories,'filters' => $request->only(['search'])]);
    }

    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    /**
     * Store a newly created category in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:255',
        ]);

        Category::create([
            'name' => $request->name,
        ]);

        return to_route('categories.index')->with('success', 'Categories created successfully.');
    }

    /**
     * Show the form for editing the specified cetegory.
     */
    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', [
            'category' => $category,
        ]);
    }

    /**
     * Update the specified book in storage.
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|min:3|max:255',
        ]);

        $category->update([
            'name' => $request->name,
        ]);

        return to_route('categories.index')->with('success', 'Category updated successfully.');
    }
   

    /**
     * Remove the specified book from storage.
     */
    public function destroy( Category $category)
    {
        $category->delete();

        return to_route('categories.index')->with('success', 'Category deleted successfully.');
    }
}
