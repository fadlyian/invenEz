import { Link } from "@inertiajs/react";
import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar({header, user})
{
    const link = [
        {
            'name' : 'Dashboard',
            'route' : 'dashboard',
            'icon' : `<svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path d="M21 16V4H3v12h18m0-14a2 2 0 012 2v12a2 2 0 01-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 01-2-2V4c0-1.11.89-2 2-2h18M5 6h9v5H5V6m10 0h4v2h-4V6m4 3v5h-4V9h4M5 12h4v2H5v-2m5 0h4v2h-4v-2z" />
                    </svg>`
        },
        {
            'name' : 'Barang',
            'route' : 'barang.view',
            'icon' : `<svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path d="M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zM105 320l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z" />
                        <path d="M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z" />
                    </svg>`
        },
        // {
        //     'name' : 'Category',
        //     'route' : 'category.view',
        //     'icon' : '',
        // },
        {
            'name' : 'Supplier',
            'route' : 'supplier.view',
            'icon' : `<svg
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2 1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40h56.5c1.4 0 2.8 0 4.2-.1 1.1.1 2.2.1 3.3.1h16c22.1 0 40-17.9 40-40v-16.2c.3-2.6.5-5.3.5-8.1l-.7-160.2h32z" />
                    </svg>`
        },
        {
            'name' : 'Cabang',
            'route' : 'cabang.view',
            'icon' : `<svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3m-5 3v-2H7v2h5m5-6H7v2h7.69A5.983 5.983 0 0012 18c0 1.09.29 2.12.8 3H5a2 2 0 01-2-2V5c0-1.11.89-2 2-2h14a2 2 0 012 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08V11m0-2V7H7v2h10z" />
                    </svg>`
        },

    ]
  return (
    <div className="navbar bg-blue-600 border-b-2 border-blue-600">
        <div className="flex lg:flex-none items-center">
            <div className="drawer md:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                            className="md:hidden"
                            >
                            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                        </svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu w-80 min-h-full bg-base-200 text-base-content inline-block absolute">
                    {/* Sidebar content here */}
                    <div className="flex items-center gap-3 flex-row px-3 py-4 border-b-2">
                        <svg
                            viewBox="0 0 496 512"
                            fill="currentColor"
                            height="3em"
                            width="3em"
                            >
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm52.7 93c8.8-15.2 28.3-20.5 43.5-11.7 15.3 8.8 20.5 28.3 11.7 43.6-8.8 15.2-28.3 20.5-43.5 11.7-15.3-8.9-20.5-28.4-11.7-43.6zM87.4 287.9c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.6-14.3 31.9-31.9 31.9zm28.1 3.1c22.3-17.9 22.4-51.9 0-69.9 8.6-32.8 29.1-60.7 56.5-79.1l23.7 39.6c-51.5 36.3-51.5 112.5 0 148.8L172 370c-27.4-18.3-47.8-46.3-56.5-79zm228.7 131.7c-15.3 8.8-34.7 3.6-43.5-11.7-8.8-15.3-3.6-34.8 11.7-43.6 15.2-8.8 34.7-3.6 43.5 11.7 8.8 15.3 3.6 34.8-11.7 43.6zm.3-69.5c-26.7-10.3-56.1 6.6-60.5 35-5.2 1.4-48.9 14.3-96.7-9.4l22.5-40.3c57 26.5 123.4-11.7 128.9-74.4l46.1.7c-2.3 34.5-17.3 65.5-40.3 88.4zm-5.9-105.3c-5.4-62-71.3-101.2-128.9-74.4l-22.5-40.3c47.9-23.7 91.5-10.8 96.7-9.4 4.4 28.3 33.8 45.3 60.5 35 23.1 22.9 38 53.9 40.2 88.5l-46 .6z" />
                        </svg>
                        <label className=" text-3xl font-bold">InvenEz</label>
                    </div>
                    {link.map((item, index) => {
                        return (
                            // <a href={route(item.route)}>
                            //     <li key={index} className="flex flex-row items-center text-xl">
                            //         <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                            //         {item.name}
                            //     </li>
                            // </a>

                            <li key={index} className="flex flex-row items-center text-xl">
                                <a href={route(item.route)}>
                                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
            {header && (
                <a className="text-2xl font-bold text-white md:px-4">{header}</a>
            )}
        </div>
        <div className="flex justify-end flex-1 ">
            <div className="flex items-stretch">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost rounded-btn text-white text-xs">{user.user.name}</label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li>
                            <a href={route("profile.edit")}>Profile</a>
                        </li>
                        <li>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

;
