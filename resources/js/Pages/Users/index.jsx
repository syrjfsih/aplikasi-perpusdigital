import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import Table from "@/Components/Table";
import Button from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import { Head, usePage } from "@inertiajs/react";
import Search from "@/Components/Search";
import hasAnyPermission from "@/Utils/Permissions";

export default function Index({ auth }) {
    const { users, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-2xl font-bold text-[#4B3B2A] tracking-tight font-serif">
                    👥 Manajemen Pengguna
                </h2>
            }
        >
            <Head title="Users" />

            <Container>
                <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {hasAnyPermission(["users create"]) && (
                        <Button type="add" url={route("users.create")}>
                            Tambah Pengguna
                        </Button>
                    )}
                    <div className="w-full md:w-1/2">
                        <Search
                            url={route("users.index")}
                            placeholder="Cari pengguna berdasarkan nama..."
                            filter={filters}
                        />
                    </div>
                </div>

                <Table.Card title="📋 Daftar Pengguna">
                    <Table>
                        <Table.Thead>
                            <tr className="bg-[#fdfaf6] text-[#5c4438] text-sm uppercase">
                                <Table.Th>No</Table.Th>
                                <Table.Th>Nama & Email</Table.Th>
                                <Table.Th>Role</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {users.data.length > 0 ? (
                                users.data.map((user, i) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-[#f9f5f0] transition duration-200"
                                    >
                                        <Table.Td>
                                            {i + 1 + (users.current_page - 1) * users.per_page}
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="text-[#3b2f2f] font-medium">
                                                {user.name}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {user.email}
                                            </div>
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex flex-wrap gap-2">
                                                {user.roles.map((role) => (
                                                    <span
                                                        key={role.id}
                                                        className="inline-block bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full shadow-sm"
                                                    >
                                                        {role.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex justify-center gap-2">
                                                {hasAnyPermission(["users edit"]) && (
                                                    <Button
                                                        type="edit"
                                                        url={route("users.edit", user.id)}
                                                    />
                                                )}
                                                {hasAnyPermission(["users delete"]) && (
                                                    <Button
                                                        type="delete"
                                                        url={route("users.destroy", user.id)}
                                                    />
                                                )}
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Table.Td colSpan={4} className="text-center text-gray-500 italic py-6">
                                        Belum ada data pengguna yang tersedia.
                                    </Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {users.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={users.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
