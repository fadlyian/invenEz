import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import SideBar from "@/Components/SideBar";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import Navbar from "@/Components/Navbar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // const link = [
    //     {
    //         'name' : 'Dashboard',
    //         'route' : 'dashboard',
    //     },
    //     {
    //         'name' : 'Barang',
    //         'route' : 'barang.view',
    //     },
    //     {
    //         'name' : 'Category',
    //         'route' : 'category.view',
    //     },
    //     {
    //         'name' : 'Supplier',
    //         'route' : 'supplier.view',
    //     },
    // ]
    return (
            <div className="flex h-full">
                <SideBar></SideBar>

                <div className=" w-full">
                    <Navbar header={header} user={user}></Navbar>
                    <main className="p-6">
                        {children}
                    </main>
                </div>
            </div>
    );
}
