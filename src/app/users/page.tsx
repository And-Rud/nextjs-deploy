"use server";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import A from "../components/A";
import { useEffect } from "react";
import MainContainer from "../components/MainContainer";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Users({ params }: { params: any }) {
  const data = await getUsers();

  return (
    <MainContainer>
      <h1>Список користувачів</h1>
      <ul className="ul__list">
        {data.map(
          (user: { id: React.Key | null | undefined; name: string }) => (
            <li key={user.id}>
              <A href={`/users/${user.id}`} text={user.name} />
            </li>
          )
        )}
      </ul>
    </MainContainer>
  );
}
