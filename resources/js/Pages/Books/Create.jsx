import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/Container';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import Swal from 'sweetalert2';

export default function Create({ auth, categories }) {
    // Tambahkan category_ids di form state
    const { data, setData, post, errors } = useForm({
        title: '',
        body: '',
        author: '',
        publisher: '',
        year: '',
        
    });

    // Method untuk menyimpan data book
    const handleStoreData = async (e) => {
        e.preventDefault();

        post(route('books.store'), {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Book created successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Book
                </h2>
            }
        >
            <Head title={'Create Book'} />
            <Container>
                <Card title={'Create new book'}>
                    <form onSubmit={handleStoreData}>
                        <div className="mb-4">
                            <Input 
                                label={'Title'} 
                                type={'text'} 
                                value={data.title} 
                                onChange={e => setData('title', e.target.value)} 
                                errors={errors.title} 
                                placeholder="Input book title..." 
                            />
                        </div>
                        <div className="mb-4">
                            <Input 
                                label={'Author'} 
                                type={'text'} 
                                value={data.author} 
                                onChange={e => setData('author', e.target.value)} 
                                errors={errors.author} 
                                placeholder="Input book author..." 
                            />
                        </div>
                        <div className="mb-4">
                            <Input 
                                label={'Published'} 
                                type={'text'} 
                                value={data.publisher} 
                                onChange={e => setData('publisher', e.target.value)} 
                                errors={errors.publisher} 
                                placeholder="Input book published..." 
                            />
                        </div>
                        <div className="mb-4">
                            <Input 
                                label={'Year'} 
                                type={'text'} 
                                value={data.year} 
                                onChange={e => setData('year', e.target.value)} 
                                errors={errors.year} 
                                placeholder="Input book year..." 
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Button type={'submit'} />
                            <Button type={'cancel'} url={route('books.index')} />
                        </div>
                    </form>
                </Card>
            </Container>
        </AuthenticatedLayout>
    )
}
