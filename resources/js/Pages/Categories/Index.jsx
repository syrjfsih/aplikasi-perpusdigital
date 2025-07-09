import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/Container';
import Table from '@/Components/Table';
import Button from '@/Components/Button';
import Pagination from '@/Components/Pagination';
import Search from '@/Components/Search';
import { Head, usePage } from '@inertiajs/react';
import hasAnyPermission from '@/Utils/Permissions';

export default function Index({ auth }) {
    const { categories, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-2xl font-bold text-[#4B3B2A] tracking-tight font-serif">
                    🗂️ Kategori Buku
                </h2>
            }
        >
            <Head title="Categories" />

            <Container>
                <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {hasAnyPermission(['categories create']) && (
                        <Button type="add" url={route('categories.create')}>
                            Tambah Kategori
                        </Button>
                    )}
                    <div className="w-full md:w-1/2">
                        <Search
                            url={route('categories.index')}
                            placeholder="Cari kategori berdasarkan nama..."
                            filter={filters}
                        />
                    </div>
                </div>

                <Table.Card title="📁 Daftar Kategori Buku">
                    <Table>
                        <Table.Thead>
                            <tr className="bg-[#fdfaf6] text-[#5c4438] text-sm uppercase">
                                <Table.Th>No</Table.Th>
                                <Table.Th>Nama Kategori</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>

                        <Table.Tbody>
                            {categories.data.length > 0 ? (
                                categories.data.map((category, i) => (
                                    <tr
                                        key={category.id}
                                        className="hover:bg-[#f9f5f0] transition duration-200"
                                    >
                                        <Table.Td>
                                            {i + 1 + (categories.current_page - 1) * categories.per_page}
                                        </Table.Td>
                                        <Table.Td className="text-[#4e342e] font-medium">
                                            {category.name}
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex justify-center items-center gap-2">
                                                {hasAnyPermission(['categories edit']) && (
                                                    <Button
                                                        type="edit"
                                                        url={route('categories.edit', category.id)}
                                                    />
                                                )}
                                                {hasAnyPermission(['categories delete']) && (
                                                    <Button
                                                        type="delete"
                                                        url={route('categories.destroy', category.id)}
                                                    />
                                                )}
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Table.Td colSpan={3} className="text-center text-gray-500 italic py-6">
                                        Belum ada kategori buku.
                                    </Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {categories.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={categories.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
