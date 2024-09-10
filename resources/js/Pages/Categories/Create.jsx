import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
export default function Create({auth}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
      });
    
      const submit = (e) => {
        e.preventDefault();
        post(route('categories.store'));
      };

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Create  Products" />
      <h1 className='mb-4'>Create Product</h1>
      <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name Category" />
                    <TextInput
                        id="name_categories"
                        name="name_categories"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Description" />

                    <TextInput
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Save
                    </PrimaryButton>
                </div>
            </form>
    </AuthenticatedLayout>
  );
}
