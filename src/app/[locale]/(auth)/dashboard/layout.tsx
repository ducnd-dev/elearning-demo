// import { useTranslations } from 'next-intl';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  // const t = useTranslations('DashboardLayout');

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        sidebar
      </div>
      <div className="col-span-8">
        {props.children}
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';
