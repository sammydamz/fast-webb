'use client';

import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";

const SidebarContact = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={`subside-barmenu sub-contact ${
          isSidebarOpen ? "active" : ""
        }`}
      >
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="remove-click d-flex justify-content-center align-items-center"
        >
          <i className="bi bi-x-lg" />
        </div>
        <div className="sub-contact-wrapper d-grid">
          {/* <Link href="index-2.html" class="side-logo">
              <img src="assets/img/logo/logo.png" alt="img">
          </a> */}
          <Link href="/" className="logo">
            <h4>
              P<span className="txt-orange">e</span>rtest
            </h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            aliquid dolorum optio repellat rerum commodi accusantium rem
            praesentium possimus dignissimos.
          </p>
          <div className="sub-contact-left d-grid">
            <div className="sub-contac-item">
              <div className="address-widget">
                <span className="address d-block">address</span>
                <span className="textp">Victoria Street, London</span>
              </div>
            </div>
            <div className="sub-contac-item">
              <div className="address-widget">
                <span className="address d-block">email</span>
                <Link href="#" className="textp">
                  pertest@email.com
                </Link>
              </div>
            </div>
            <div className="sub-contac-item">
              <div className="address-widget">
                <span className="address d-block">call now</span>
                <Link href="javascript:void(0)" className="textp">
                  +89 4758 2154 021
                </Link>
              </div>
            </div>
          </div>
          <div className="sub-contac-right mb-60 position-relative">
            <ul className="social d-flex gap-3">
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube" />
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="#contact"
            className="d-flex justify-content-center lets-talk-btn align-items-center gap-2"
          >
            <span className="get-text">Let's Talk</span>
            <span>
              <i className="bi bi-arrow-up-right" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarContact;
