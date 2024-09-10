
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Index({ auth }) {
  const { users } = usePage().props;
  const handleDelete = (id) => {
    console.log("Asdasdasdas");
    
    if (confirm('Are you sure you want to delete this product?')) {
      router.delete(route('users.destroy', id), {
        onSuccess: () => alert('Product deleted successfully.'),
      });
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Users" />
      <div className="my-6">
        <Link href={route('users.create')} className="text-gray-900 bg-white border border-gray-300  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
          Create Uses
        </Link>
      </div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="odd:bg-white 0">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </th>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                {user.roles.map(role => role.name).join(', ')}
                </td>

                <td className="px-6 flex items-center space-x-2 py-4">
                  <Link href={route('users.edit',user.id)} className="text-blue-500">Edit</Link>
                  <button type="button"   onClick={() => handleDelete(user.id)} class="text-red-500 ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </AuthenticatedLayout>
  );
}
