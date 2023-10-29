import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'

export default function CbangEdit({
    auth,
    id,
    can,
    cabang=''
}){

    const editmode = id !== null;

    // console.log(editmode);
    const { data, setData, post, patch, processing, errors } = useForm({
        name: !editmode ? '' : cabang.name,
        address: !editmode ? '' : cabang.address,
        telp: !editmode ? '' : cabang.telp,
    })

    function submit(e) {
        if(!editmode){
            e.preventDefault()
            post(route('cabang.store'))
        }else{
            e.preventDefault()
            patch(route('cabang.update', id))
        }
    }
    return (
        <AuthenticatedLayout
        user={auth}
        header={<h2>Cabang</h2>}
        >

            <Head title="Permissions Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="md:text-sm breadcrumbs mx-3">
                    <ul>
                        <li>
                            <a href={route('cabang.view')}>cabang</a>
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
                            <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)} required/>
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>

                        {/* address */}
                        <div>
                            <label htmlFor="Address">Address</label><br />
                            <input type="text" placeholder="Type Address here" className="input input-bordered w-full max-w-xs" value={data.address} onChange={e => setData('address', e.target.value)} required/>
                            {errors.address && <div className="text-red-500">{errors.address}</div>}
                        </div>

                        {/* telp */}
                        <div>
                            <label htmlFor="telp">telp</label><br />
                            <input type="text" placeholder="Type telp here" className="input input-bordered w-full max-w-xs" value={data.telp} onChange={e => setData('telp', e.target.value)} required maxLength={16}/>
                            {errors.telp && <div className="text-red-500">{errors.telp}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div className="flex flex-row gap-x-36">
                            <button className="btn btn-success" type="submit">{editmode? 'update': 'create'}</button>
                            {/* <a href={route('supplier.viwe')} type="button">cancel</a> */}
                            <a className="btn btn-warning" href={'javascript:history.back()'} type="submit">cancel</a>
                            {editmode && (
                                <>
                                {/* <a className="btn btn-warning" href={route('supplier.view')} type="submit">cancel</a> */}
                                </>
                            )}
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}
