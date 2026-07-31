export async function postJson(url: string, body: any) {
const res = await fetch(url, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(body),
});
const data = await res.json();
if (!res.ok) throw data;
return data;
}