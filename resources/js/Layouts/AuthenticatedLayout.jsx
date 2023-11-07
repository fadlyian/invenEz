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
                {/* <Sidebar className="hidden md:block">
                    <div className="flex gap-3 flex-row px-6 py-4 border-b-2">
                        <svg
                            viewBox="0 0 496 512"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            >
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm52.7 93c8.8-15.2 28.3-20.5 43.5-11.7 15.3 8.8 20.5 28.3 11.7 43.6-8.8 15.2-28.3 20.5-43.5 11.7-15.3-8.9-20.5-28.4-11.7-43.6zM87.4 287.9c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.6-14.3 31.9-31.9 31.9zm28.1 3.1c22.3-17.9 22.4-51.9 0-69.9 8.6-32.8 29.1-60.7 56.5-79.1l23.7 39.6c-51.5 36.3-51.5 112.5 0 148.8L172 370c-27.4-18.3-47.8-46.3-56.5-79zm228.7 131.7c-15.3 8.8-34.7 3.6-43.5-11.7-8.8-15.3-3.6-34.8 11.7-43.6 15.2-8.8 34.7-3.6 43.5 11.7 8.8 15.3 3.6 34.8-11.7 43.6zm.3-69.5c-26.7-10.3-56.1 6.6-60.5 35-5.2 1.4-48.9 14.3-96.7-9.4l22.5-40.3c57 26.5 123.4-11.7 128.9-74.4l46.1.7c-2.3 34.5-17.3 65.5-40.3 88.4zm-5.9-105.3c-5.4-62-71.3-101.2-128.9-74.4l-22.5-40.3c47.9-23.7 91.5-10.8 96.7-9.4 4.4 28.3 33.8 45.3 60.5 35 23.1 22.9 38 53.9 40.2 88.5l-46 .6z" />
                        </svg>
                        <label className=" text-2xl font-bold">InvenEz</label>
                    </div>
                    <Menu>
                        <MenuItem active icon={
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="2em"
                                    width="2em"
                                    >
                                    <path d="M21 16V4H3v12h18m0-14a2 2 0 012 2v12a2 2 0 01-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 01-2-2V4c0-1.11.89-2 2-2h18M5 6h9v5H5V6m10 0h4v2h-4V6m4 3v5h-4V9h4M5 12h4v2H5v-2m5 0h4v2h-4v-2z" />
                                    </svg>
                            }
                            href={route('dashboard')}
                        >Dashboard</MenuItem>
                        <SubMenu label="Barang" defaultOpen icon={
                                <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zM105 320l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z" />
                                <path d="M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z" />
                            </svg>
                            }
                        >
                            <MenuItem href={route('barang.view')}>Barang</MenuItem>
                            <MenuItem href={route('category.view')}> Category</MenuItem>
                        </SubMenu>
                        <MenuItem icon={
                                <svg
                                viewBox="0 0 640 512"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M640 0v400c0 61.9-50.1 112-112 112-61 0-110.5-48.7-112-109.3L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64h224zm-64 400c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zM23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2l46.4-12.4 20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3 46.4-12.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2l-154.6 41.5c-17.1 4.6-34.6-5.6-39.2-22.6L23.1 207.7z" />
                            </svg>
                            }
                            href={route('supplier.view')}
                        >Supplier</MenuItem>
                        <MenuItem icon={
                                <svg
                                viewBox="0 0 576 512"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2 1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40h56.5c1.4 0 2.8 0 4.2-.1 1.1.1 2.2.1 3.3.1h16c22.1 0 40-17.9 40-40v-16.2c.3-2.6.5-5.3.5-8.1l-.7-160.2h32z" />
                            </svg>
                            }
                            href={route('cabang.view')}
                        >Cabang</MenuItem>
                        <MenuItem icon={
                            <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            >
                            <path d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3m-5 3v-2H7v2h5m5-6H7v2h7.69A5.983 5.983 0 0012 18c0 1.09.29 2.12.8 3H5a2 2 0 01-2-2V5c0-1.11.89-2 2-2h14a2 2 0 012 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08V11m0-2V7H7v2h10z" />
                            </svg>
                        }> Barang Masuk</MenuItem>
                        <MenuItem icon={
                            <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            >
                            <path d="M22 17v2h-8v-2h8m-10 0v-2H7v2h5m5-6H7v2h7.69A5.983 5.983 0 0012 18c0 1.09.29 2.12.8 3H5a2 2 0 01-2-2V5c0-1.11.89-2 2-2h14a2 2 0 012 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08V11m0-2V7H7v2h10z" />
                            </svg>
                        }> Barang Keluar</MenuItem>
                        <SubMenu label='Users' defaultOpen icon={
                            <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                        >
                            <path d="M256 112c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 128c-22.06 0-40-17.95-40-40 0-22.1 17.9-40 40-40s40 17.94 40 40c0 22.1-17.9 40-40 40zm0-240C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zm160.2-75.5c-27-42.2-73-68.5-124.4-68.5h-71.6c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208c0 50.3-18 96.5-47.8 132.5z" />
                        </svg>
                        }>
                            <MenuItem href={route('user.view')}>Users</MenuItem>
                            <MenuItem href={route('role.view')}> Role</MenuItem>
                            <MenuItem href={route('permission.view')}> Permission</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar> */}
                <SideBar></SideBar>

                <div className="bg-red-400 w-full">
                    <Navbar header={header} user={user}></Navbar>
                    <main className="">
                        {children}
                    </main>
                </div>
            </div>
    );
}
