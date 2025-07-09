import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/Container';
import Table from '@/Components/Table';
import Button from '@/Components/Button';
import Pagination from '@/Components/Pagination';
import { Head, usePage } from '@inertiajs/react';
import Search from '@/Components/Search';
import hasAnyPermission from '@/Utils/Permissions';

export default function Index({ auth }) {
    const { books, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-2xl font-bold text-[#4B3B2A] tracking-tight font-serif">
                    📚 Daftar Buku
                </h2>
            }
        >
            <Head title="Books" />

            <Container>
                <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {hasAnyPermission(['books create']) && (
                        <Button type="add" url={route('books.create')}>
                            Tambah Buku
                        </Button>
                    )}
                    <div className="w-full md:w-1/2">
                        <Search
                            url={route('books.index')}
                            placeholder="Cari buku berdasarkan judul..."
                            filter={filters}
                        />
                    </div>
                </div>

                <Table.Card title="📖 Koleksi Buku">
                    <Table>
                        <Table.Thead>
                            <tr className="bg-[#fdfaf6] text-[#5c4438] text-sm uppercase">
                                <Table.Th>No</Table.Th>
                                <Table.Th>Judul</Table.Th>
                                <Table.Th>Penulis</Table.Th>
                                <Table.Th>Penerbit</Table.Th>
                                <Table.Th>Tahun</Table.Th>
                                <Table.Th>Kategori</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>

                        <Table.Tbody>
                            {books.data.map((book, i) => (
                                <tr
                                    key={book.id}
                                    className="hover:bg-[#f9f5f0] transition duration-200"
                                >
                                    <Table.Td>
                                        {i + 1 + (books.current_page - 1) * books.per_page}
                                    </Table.Td>
                                    <Table.Td className="font-medium text-[#4e342e]">{book.title}</Table.Td>
                                    <Table.Td>{book.author}</Table.Td>
                                    <Table.Td>{book.publisher}</Table.Td>
                                    <Table.Td>{book.year}</Table.Td>
                                    <Table.Td>
                                        <div className="flex flex-wrap gap-1">
                                            {book.categories.map((category) => (
                                                <span
                                                    key={category.id}
                                                    className="inline-block border border-[#d6ccc2] bg-[#f5f3ea] text-[#5c4438] text-xs px-2 py-1 rounded-full font-medium"
                                                >
                                                    {category.name}
                                                </span>
                                            ))}
                                        </div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div className="flex justify-center items-center gap-2">
                                            {hasAnyPermission(['books edit']) && (
                                                <Button
                                                    type="edit"
                                                    url={route('books.edit', book.id)}
                                                />
                                            )}
                                            {hasAnyPermission(['books delete']) && (
                                                <Button
                                                    type="delete"
                                                    url={route('books.destroy', book.id)}
                                                />
                                            )}
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {books.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={books.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
