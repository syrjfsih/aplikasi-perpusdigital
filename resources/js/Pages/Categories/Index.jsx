import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/Container';
import Table from '@/Components/Table';
import Button from '@/Components/Button';
import Pagination from '@/Components/Pagination';
import { Head, usePage } from '@inertiajs/react';
import Search from '@/Components/Search';
import hasAnyPermission from '@/Utils/Permissions';

export default function Index({ auth }) {
    // Destructuring categories dan filters dari props Inertia
    const { categories, filters } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Categories
                </h2>
            }
        >
            <Head title={'Categories'} />
            <Container>
                <div className="mb-4 flex items-center justify-between gap-4">
                    {hasAnyPermission(['categories create']) && (
                        <Button type={'add'} url={route('categories.create')} />
                    )}
                    <div className="w-full md:w-4/6">
                        <Search 
                            url={route('categories.index')} 
                            placeholder={'Search categories by name...'} 
                            filter={filters} 
                        />
                    </div>
                </div>
                <Table.Card title={'Categories'}>
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th>No</Table.Th>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Action</Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {categories.data.map((category, i) => (
                                <tr key={category.id}>
                                    <Table.Td>
                                        {i + 1 + (categories.current_page - 1) * categories.per_page}
                                    </Table.Td>
                                    <Table.Td>{category.name}</Table.Td>
                                    <Table.Td>
                                        <div className="flex items-center gap-2">
                                            {hasAnyPermission(['categories edit']) && (
                                                <Button type={'edit'} url={route('categories.edit', category.id)} />
                                            )}
                                            {hasAnyPermission(['categories delete']) && (
                                                <Button type={'delete'} url={route('categories.destroy', category.id)} />
                                            )}
                                            
                                        </div>
                                    </Table.Td>
                                </tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Table.Card>
                <div className="flex items-center justify-center">
                    {categories.last_page !== 1 && (
                        <Pagination links={categories.links} />
                    )}
                </div>
            </Container>
        </AuthenticatedLayout>
    );
}
