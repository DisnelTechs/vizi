"use client";

import { Disclosure } from "@headlessui/react";
import React from "react";

interface SolutionsAccordionProps {
  solutions: {
    title: string;
    description: string;
    category: string;
  }[];
}

const SolutionsAccordion = ({ solutions }: SolutionsAccordionProps) => {
  return (
    <div className="space-y-3 pl-2 lg:pl-8 border-l-4 border-neutral">
      {solutions.map((solucion, index) => (
        <div key={index}>
          <Disclosure>
            <Disclosure.Button>
              <div className="hover:text-primary font-bold uppercase tracking-wider duration-300 ease-in-out">
                {solucion.title}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className="mt-3" dangerouslySetInnerHTML={{ __html: solucion.description }} />
            </Disclosure.Panel>
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default SolutionsAccordion;
