import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function User({ auth, users }) {
    // console.log(auth);

    // const {user, setUser, delete:destroy, errors} = useForm({
    //     id : "",
    // });

    // const handleDelete = (id) => {

    // }

    return (
        <AuthenticatedLayout user={auth} header={<h2>Users</h2>}>
            <Head title="Users" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                {/* <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Documents</a>
                        </li>
                        <li>Add Document</li>
                    </ul>
                </div> */}
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* button create users */}
                    <div className="mb-4">
                        <button className="btn btn-success">
                            <a href={route("user.create")}>
                                create new user
                            </a>
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-center">No</th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <div className="flex gap-2 justify-center">
                                                    <button className="btn btn-warning">
                                                        <a href={route('user.edit', user.id)}>edit</a>
                                                    </button>
                                                    <button className="btn btn-error"
                                                        onClick={() => router.delete(route('user.destroy', user.id))}
                                                        type="button"
                                                    >
                                                        delete
                                                        {/* <a href={route('user.destroy', user.id)}>delete</a> */}
                                                        {/* <a href={`/users/${user.id}`}>delete</a> */}
                                                        {/* <a href={() => {
                                                            deleteUser(user.id)
                                                        }}>delete</a> */}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div></div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
