import ButtonCreate from "@/Components/ButtonCreate";
import ButtonEdit from "@/Components/ButtonEdit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Supplier({ auth, suppliers, can }) {
    return (
        <AuthenticatedLayout user={auth} header={<h2>Supplier</h2>}>
            <Head title="Supplier" />
            <div className="">
                <div className="bg-white overflow-hidden">
                    {/* button create supplier */}
                    <div className="mb-4">
                        {can.edit && (
                            <ButtonCreate href={route('supplier.create')}>
                                create new supplier
                            </ButtonCreate>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-zebra table-fixed md:table md:table-zebra">
                            <thead>
                                <tr className="border-2 md:border-none">
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Telp</th>
                                    {(can.delete || can.edit) && (
                                        <th className="text-center">Action</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((supplier, index) => {
                                    return (
                                        <>
                                        <tr key={index}>
                                            <td>{supplier.name}</td>
                                            <td>{supplier.address}</td>
                                            <td>{supplier.telp}</td>
                                            <td>
                                                <div className={`flex gap-2 justify-center ${supplier.name == "super-admin" ? "hidden" : ""}`}>
                                                    {can.edit && (
                                                        <ButtonEdit href={route('supplier.edit', supplier.id)}>
                                                            Edit
                                                        </ButtonEdit>
                                                    )}
                                                    {can.delete && (
                                                        <button className="btn btn-error border-none hover:bg-red-300 hover:border-none"
                                                            onClick={() => {
                                                                if(confirm(`Are you sure want to delete this supplier "${supplier.name}" ?`)){
                                                                    router.delete(route('supplier.destroy', supplier.id))
                                                                }
                                                            }}
                                                            type="button"
                                                        >
                                                            delete
                                                        </button>
                                                    )}

                                                </div>
                                            </td>
                                        </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
