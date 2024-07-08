import Counter from "@/components/Counter";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "Ustaxona haqida barchasi",
};

function About() {
  return (
    <div>
      <h1 className="text-3xl">About</h1>
      <Counter />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa earum
        excepturi suscipit, laboriosam nobis, quidem debitis veniam voluptatem
        et magni corporis quas id dignissimos officiis reprehenderit mollitia
        delectus amet voluptate fugiat, alias pariatur magnam sit officia? Quos,
        dignissimos! Debitis dicta eius corrupti incidunt culpa dignissimos
        veniam iusto officiis inventore eveniet?
      </p>
    </div>
  );
}

export default About;
