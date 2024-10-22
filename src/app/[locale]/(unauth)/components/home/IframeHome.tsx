import { revalidatePath } from "next/cache";

const html = async () => {
  const response = await fetch('https://builderjs.cuongdesign.net/templates/default/ColleagueCourses');
  const text = await response.text();
  return text;
};
const IframeHome = async () => {
  revalidatePath('https://builderjs.cuongdesign.net/templates/default/ColleagueCourses');
  const data = await html();
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    >
    </div>
  );
};

export default IframeHome;
