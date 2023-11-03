import MainContainer from "@/app/components/MainContainer";

export default async function Page({ params }: { params: any }) {
  async function getUsers() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    return res.json();
  }
  const data = await getUsers();
  const us = params.id - 1;
  return (
    <MainContainer>
      <div>Користувач id: {data[us].id}</div>
      <div>Користувач: {data[us].name}</div>
      <div>Пошта: {data[us].email}</div>
      <div>Місто: {data[us].address.city}</div>
    </MainContainer>
  );
}
