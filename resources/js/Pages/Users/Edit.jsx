import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'
import Select from "@/Components/Select";

export default function Edit({ auth, user, roles }) {
    console.log(user);
    // console.log("heloo semua");

    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: '',
        role: '',
    })
    console.log(data);

    function submit(e) {
        e.preventDefault()
        put(route('user.update', user.id))
    }

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2>Users</h2>}
            >

            <Head title="Users Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a href={route('user.view')}>Users</a>
                        </li>
                        <li>
                            <a>Edit</a>
                        </li>
                    </ul>
                </div>
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        {/* NAME */}
                        <div>
                            <label htmlFor="name">Name</label><br />
                            <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)}/>
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label htmlFor="name">Email</label><br />
                            <input id="email" type="text" placeholder="Type email here" className="input input-bordered w-full max-w-xs" value={data.email} onChange={e => setData('email', e.target.value)}/>
                            {errors.email && <div className="text-red-500">{errors.email}</div>}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label htmlFor="name">Password</label><br />
                            <input id="password" type="password" placeholder="Type new password here" className="input input-bordered w-full max-w-xs" value={data.password} onChange={e => setData('password', e.target.value)}/>
                            {errors.password && <div className="text-red-500">{errors.password}</div>}
                        </div>

                        {/* ROLE */}
                        <div>
                            <label htmlFor="name">Role</label><br />
                            {/* <Select
                             label="role"
                             name="role"
                             value={data.role}
                             onChange={e => setData('role', e.target.value)}
                             defaultMessage="Role yang tepat?"
                             data={roles}
                            /> */}
                            <select name="role" id="role" className="select select-bordered w-full max-w-xs" onChange={e => setData('role', e.target.value)} value={data.role}>
                                <option value={""} disabled selected>Choose new role</option>
                                {roles.map((role, index) => {
                                    return (
                                        <option key={index} id="role" value={role.name} >{role.name}</option>
                                    )
                                })}
                            </select>
                            {errors.role && <div className="text-red-500">{errors.role}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div className="flex flex-row gap-x-36">
                            <button className="btn btn-success" type="submit">Create</button>
                            <a className="btn btn-error" href={route('user.view')}>Cancel</a>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
