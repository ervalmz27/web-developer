import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ product,auth }) {
  const { data, setData, put, processing, errors } = useForm({
    name: product.name || '',
    description: product.description || '',
    price: product.price || '',
  });

  const submit = (e) => {
    e.preventDefault();
    put(`/products/${product.id}`);
  };

  return (
    <AuthenticatedLayout
    user={auth.user}
  >
    <Head title="Update  Products" />
    <h1 className='mb-4'>Update Product</h1>
    <form onSubmit={submit}>
              <div>
                  <InputLabel htmlFor="name" value="Name Product" />
                  <TextInput
                      id="name"
                      name="name"
                      value={data.name}
                      className="mt-1 block w-full"
                      autoComplete="name"
                      isFocused={true}
                      onChange={(e) => setData('name', e.target.value)}
                      required
                  />

                  <InputError message={errors.name} className="mt-2" />
              </div>

              <div className="mt-4">
                  <InputLabel htmlFor="description" value="Description" />

                  <TextInput
                      id="email"
                      name="email"
                      value={data.description}
                      className="mt-1 block w-full"
                      onChange={(e) => setData('description', e.target.value)}
                      required
                  />

                  <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                  <InputLabel htmlFor="price" value="Price" />

                  <TextInput
                      id="price"
                      name="price"
                      value={data.price}
                      className="mt-1 block w-full"
                      onChange={(e) => setData('price', e.target.value)}
                      required
                  />

                  <InputError message={errors.price} className="mt-2" />
              </div>

              <div className="flex items-center justify-end mt-4">
                  <PrimaryButton className="ms-4" disabled={processing}>
                      Update
                  </PrimaryButton>
              </div>
          </form>
  </AuthenticatedLayout>
  );
}
