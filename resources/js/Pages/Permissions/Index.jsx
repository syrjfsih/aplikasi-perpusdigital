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
    const { permissions, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-2xl font-bold text-[#4B3B2A] tracking-tight font-serif">
                    🔐 Hak Akses (Permissions)
                </h2>
            }
        >
            <Head title="Permissions" />

            <Container>
                <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {hasAnyPermission(['permissions create']) && (
                        <Button type="add" url={route('permissions.create')}>
                            Tambah Hak Akses
                        </Button>
                    )}
                    <div className="w-full md:w-1/2">
                        <Search
                            url={route('permissions.index')}
                            placeholder="Cari permission berdasarkan nama..."
                            filter={filters}
                        />
                    </div>
                </div>

                <Table.Card title="📋 Daftar Hak Akses Sistem">
                    <Table>
                        <Table.Thead>
                            <tr className="bg-[#fdfaf6] text-[#5c4438] text-sm uppercase">
                                <Table.Th>#</Table.Th>
                                <Table.Th>Nama Permission</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>

                        <Table.Tbody>
                            {permissions.data.length > 0 ? (
                                permissions.data.map((permission, i) => (
                                    <tr
                                        key={permission.id}
                                        className="hover:bg-[#f9f5f0] transition duration-200"
                                    >
                                        <Table.Td>
                                            {i + 1 + (permissions.current_page - 1) * permissions.per_page}
                                        </Table.Td>
                                        <Table.Td className="text-[#3b2f2f] font-medium">
                                            {permission.name}
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex justify-center items-center gap-2">
                                                {hasAnyPermission(['permissions edit']) && (
                                                    <Button type="edit" url={route('permissions.edit', permission.id)} />
                                                )}
                                                {hasAnyPermission(['permissions delete']) && (
                                                    <Button type="delete" url={route('permissions.destroy', permission.id)} />
                                                )}
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Table.Td colSpan={3} className="text-center text-gray-500 italic py-6">
                                        Tidak ada data permission yang ditemukan.
                                    </Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {permissions.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={permissions.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
