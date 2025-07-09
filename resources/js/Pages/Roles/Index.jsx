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
    const { roles, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-2xl font-bold text-[#4B3B2A] tracking-tight font-serif">
                    🛡️ Manajemen Role
                </h2>
            }
        >
            <Head title="Roles" />

            <Container>
                <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {hasAnyPermission(["roles create"]) && (
                        <Button type="add" url={route("roles.create")}>
                            Tambah Role Baru
                        </Button>
                    )}
                    <div className="w-full md:w-1/2">
                        <Search
                            url={route("roles.index")}
                            placeholder="🔍 Cari role berdasarkan nama..."
                            filter={filters}
                        />
                    </div>
                </div>

                <Table.Card title="📋 Daftar Role Pengguna">
                    <Table>
                        <Table.Thead>
                            <tr className="bg-[#fdfaf6] text-[#5c4438] text-sm uppercase">
                                <Table.Th>No</Table.Th>
                                <Table.Th>Nama Role</Table.Th>
                                <Table.Th>Permissions</Table.Th>
                                <Table.Th className="text-center">Aksi</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {roles.data.length > 0 ? (
                                roles.data.map((role, i) => (
                                    <tr
                                        key={role.id}
                                        className="hover:bg-[#f9f5f0] transition duration-200"
                                    >
                                        <Table.Td>
                                            {i + 1 + (roles.current_page - 1) * roles.per_page}
                                        </Table.Td>
                                        <Table.Td className="text-[#3b2f2f] font-medium">
                                            {role.name}
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex flex-wrap gap-2">
                                                {role.name === "super-admin" ? (
                                                    <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full shadow-sm">
                                                        all-permissions
                                                    </span>
                                                ) : (
                                                    role.permissions.map((permission) => (
                                                        <span
                                                            key={permission.id}
                                                            className="inline-block bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full shadow-sm"
                                                        >
                                                            {permission.name}
                                                        </span>
                                                    ))
                                                )}
                                            </div>
                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex justify-center items-center gap-2">
                                                {hasAnyPermission(["roles edit"]) && (
                                                    <Button
                                                        type="edit"
                                                        url={route("roles.edit", role.id)}
                                                    />
                                                )}
                                                {hasAnyPermission(["roles delete"]) && (
                                                    <Button
                                                        type="delete"
                                                        url={route("roles.destroy", role.id)}
                                                    />
                                                )}
                                            </div>
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Table.Td colSpan={4} className="text-center text-gray-500 italic py-6">
                                        Belum ada data role yang tersedia.
                                    </Table.Td>
                                </tr>
                            )}
                        </Table.Tbody>
                    </Table>
                </Table.Card>

                {/* Pagination */}
                {roles.last_page > 1 && (
                    <div className="mt-6 flex justify-center">
                        <Pagination links={roles.links} />
                    </div>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
