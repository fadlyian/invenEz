import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'

export default function CategoryEdit({
    auth,
    id,
    can,
    category=''
}){

    const editmode = id !== null;

    // console.log(editmode);
    const { data, setData, post, patch, processing, errors } = useForm({
        name: !editmode ? '' : category.name,
    })

    function submit(e) {
        if(!editmode){
            e.preventDefault()
            post(route('category.store'))
        }else{
            e.preventDefault()
            patch(route('category.update', id))
        }
    }
    return (
        <AuthenticatedLayout
        user={auth}
        header={<h2>Category</h2>}
        >

            <Head title="Category Create" />
            <div className="bg-white overflow-hidden">
                {/* <div className="md:text-sm breadcrumbs ">
                    <ul>
                        <li>
                            <a href={route('category.view')}>category</a>
                        </li>
                        <li>
                            <a>Edit</a>
                        </li>
                    </ul>
                </div> */}
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        {/* NAME */}
                        <div>
                            <label htmlFor="name">Name Category</label><br />
                            <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)} required/>
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div className="flex flex-row gap-x-36">
                            <button className="btn btn-success" type="submit">{editmode? 'update': 'create'}</button>

                            <a className="btn btn-warning" href={'javascript:history.back()'} type="submit">cancel</a>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}
