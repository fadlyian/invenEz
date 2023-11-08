import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'

export default function barangEdit({
    auth,
    id,
    can,
    barangs='',
    categories
}){

    const editmode = id !== null;

    // console.log(editmode);
    const { data, setData, post, patch, processing, errors } = useForm({
        name: !editmode ? '' : barangs.name,
        category: !editmode ? '' : barangs.category_id,
        price: !editmode ? '' : barangs.price,
        satuan: !editmode ? '' : barangs.satuan,
        stok: !editmode ? '' : barangs.stok,
    })

    function submit(e) {
        if(!editmode){
            e.preventDefault()
            post(route('barang.store'))
        }else{
            e.preventDefault()
            patch(route('barang.update', id))
        }
    }

    console.log(data);
    return (
        <AuthenticatedLayout
        user={auth}
        header={<h2>Barang</h2>}
        >

            <Head title="Barang Create" />
            <div className="bg-white overflow-hidden">
                {/* <div className="md:text-sm breadcrumbs mx-3">
                    <ul>
                        <li>
                            <a href={route('barang.view')}>barang</a>
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
                            <label htmlFor="name">Name</label><br />
                            <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)} required/>
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category">Category</label><br />
                            <select
                                name="category"
                                id="category"
                                className="select select-bordered w-full max-w-xs"
                                onChange={e => setData('category', e.target.value)}
                                value={data.category}
                                >
                                    <option value={""} disabled selected>Choose Category?</option>
                                    {categories.map((category, index) => {
                                        return (
                                            <option key={index} id="category" value={category.id}>{category.name}</option>
                                        )
                                    })}
                            </select>
                            {/* <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)} required/> */}
                            {errors.category && <div className="text-red-500">{errors.category}</div>}
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="Price">Price</label><br />
                            <input type="number" placeholder="Type Price here" className="input input-bordered w-full max-w-xs" value={data.price} onChange={e => setData('price', e.target.value)} required/>
                            {errors.price && <div className="text-red-500">{errors.price}</div>}
                        </div>

                        {/* satuan */}
                        <div>
                            <label htmlFor="satuan">Satuan</label><br />
                            <input type="text" placeholder="Type satuan here" className="input input-bordered w-full max-w-xs" value={data.satuan} onChange={e => setData('satuan', e.target.value)} required maxLength={16}/>
                            {errors.satuan && <div className="text-red-500">{errors.satuan}</div>}
                        </div>

                        {/* STOK */}
                        <div>
                            <label htmlFor="stok">Stok</label><br />
                            <input type="number" placeholder="Type stok here" className="input input-bordered w-full max-w-xs" value={data.stok} onChange={e => setData('stok', e.target.value)} required maxLength={16}/>
                            {errors.stok && <div className="text-red-500">{errors.stok}</div>}
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
