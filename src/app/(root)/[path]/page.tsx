import { getApplicationsByPath } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Path({ params }: { params: { path: string } }) {
  let path = params.path;
  const position = path.endsWith("-in")
    ? ((path = path.replace("-in", "")), "内网")
    : "外网";
  const applications = await getApplicationsByPath(path);
  if (applications.length > 1) {
    const choice1 = applications.find((app) => app.type.name === position);
    if (choice1) {
      redirect(choice1.url);
    } else {
      const choice2 = applications.find((app) => app.type.name !== position);
      if (choice2) {
        redirect(choice2.url);
      } else {
        redirect("/");
      }
    }
  } else {
    redirect(applications[0]?.url ?? "/");
  }

  return <></>;
}
