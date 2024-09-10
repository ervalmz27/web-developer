// import React from 'react';
// import { Link, usePage, router } from '@inertiajs/react';

// export default function Index() {
//   const { categories } = usePage().props;

//   const handleDelete = (id) => {
//     if (confirm('Are you sure you want to delete this category?')) {
//       router.delete(route('categories.destroy', id), {
//         onSuccess: () => alert('Category deleted successfully.'),
//       });
//     }
//   };

//   return (
//     <div>
//       <h1>Category List</h1>
//       <Link href={route('categories.create')} className="btn btn-primary mb-4">
//         Create Category
//       </Link>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id}>
//               <td>{category.name}</td>
//               <td>{category.description}</td>
//               <td>
//                 <Link href={route('categories.edit', category.id)} className="btn btn-warning">
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(category.id)}
//                   className="btn btn-danger ml-2"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Index({ auth }) {
   const { categories } = usePage().props;

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
      router.delete(route('categories.destroy', id), {
        onSuccess: () => alert('Category deleted successfully.'),
      });
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Categories" />
      <div className="my-6">
        <Link href={route('categories.create')} className="text-gray-900 bg-white border border-gray-300  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
          Create Categories
        </Link>
      </div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
              Categories name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>


              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr className="odd:bg-white 0">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {category.name}
                </th>
                <td className="px-6 py-4">
                  {category.description}
                </td>


                <td className="px-6 flex items-center space-x-2 py-4">
                  <Link href={route('categories.edit',category.id)} className="text-blue-500">Edit</Link>
                  <button type="button"   onClick={() => handleDelete(product.id)} class="text-red-500 ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </AuthenticatedLayout>
  );
}
