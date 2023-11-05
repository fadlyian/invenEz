import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'
import { useEffect } from "react";

export default function BarangMasukCreate({
    auth,
    can,
    barangs,
    suppliers,
}){

    const { data, setData, post, processing, errors } = useForm({
        barang: '',
        supplier: '',
        price: '',
        quantity: '',
        totalPrice: '',
        description: '',
    })

    useEffect(() => {
        const price = parseInt(data.price) || 0;
        const quantity = parseInt(data.quantity) || 0;

        const totalPrice = price * quantity;

        setData('totalPrice', totalPrice);
    },[data.price, data.quantity]);

    function submit(e) {
        e.preventDefault()
        post(route('barangMasuk.store'))

    }

    console.log(data);
    return (
        <AuthenticatedLayout
        user={auth}
        header={<h2>Barang</h2>}
        >

            <Head title="Permissions Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="md:text-sm breadcrumbs mx-3">
                    <ul>
                        <li>
                            <a href={route('barang.view')}>barang</a>
                        </li>
                        <li>
                            <a>Edit</a>
                        </li>
                    </ul>
                </div>
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        {/* Kode */}
                        {/* <div>
                            <label htmlFor="kode">Kode</label><br />
                            <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" value={data.kode} onChange={e => setData('kode', e.target.value)} required/>
                            {errors.kode && <div className="text-red-500">{errors.kode}</div>}
                        </div> */}

                        {/* supplier */}
                        <div>
                            <label htmlFor="supplier">Supplier</label><br />
                            <select
                                name="supplier"
                                id="supplier"
                                className="select select-bordered w-full max-w-xs"
                                onChange={e => setData('supplier', e.target.value)}
                                defaultValue={data.supplier}
                                >
                                    <option value={''} disabled selected>Choose Supplier?</option>
                                    {suppliers.map((supplier, index) => {
                                        return (
                                            <option key={index} id="supplier" value={supplier.id}>{supplier.name}</option>
                                        )
                                    })}
                            </select>
                            {errors.supplier && <div className="text-red-500">{errors.supplier}</div>}
                        </div>

                        {/* Barang */}
                        <div>
                            <label htmlFor="barang">Barang</label><br />
                            <select
                                name="barang"
                                id="barang"
                                className="select select-bordered w-full max-w-xs"
                                onChange={e => setData('barang', e.target.value)}
                                value={data.barang}
                                >
                                    <option value={""} disabled selected>Choose Barang?</option>
                                    {barangs.map((barang, index) => {
                                        return (
                                            <option key={index} id="barang" value={barang.id}>{barang.name}</option>
                                        )
                                    })}
                            </select>
                            {errors.barang && <div className="text-red-500">{errors.barang}</div>}
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="Price">Price</label><br />
                            <input type="number" placeholder="Type Price here" className="input input-bordered w-full max-w-xs" value={data.price} onChange={e => setData('price', e.target.value)} required/>
                            {errors.price && <div className="text-red-500">{errors.price}</div>}
                        </div>

                        {/* Quantity */}
                        <div>
                            <label htmlFor="quantity">Quantity</label><br />
                            <input type="number" placeholder="Type quantity here" className="input input-bordered w-full max-w-xs" value={data.quantity} onChange={e => setData('quantity', e.target.value)} required/>
                            {errors.quantity && <div className="text-red-500">{errors.quantity}</div>}
                        </div>

                        {/* Total Price */}
                        <div>
                            <label htmlFor="totalPrice">Total Price</label><br />
                            <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs" value={data.totalPrice} onChange={e => setData('totalPrice', e.target.value)} disabled/>
                            {errors.totalPricetotalPrice && <div className="text-red-500">{errors.totalPrice}</div>}
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description">Description</label><br />
                            <textarea name="description" className="textarea textarea-bordered  w-3/6" placeholder="any word" onChange={(e) => setData('description', e.target.value)}></textarea>
                            {errors.description && <div className="text-red-500">{errors.description}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div className="flex flex-row gap-x-36">
                            <button className="btn btn-success" type="submit" disabled={processing}>Create</button>
                            <Link className="btn btn-warning" href={'javascript:history.back()'} type="submit">cancel</Link>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}
