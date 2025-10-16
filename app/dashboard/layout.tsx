import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

export const metadata = {
  title: 'Dashboard - Aye García',
};

export default function DashboardAppLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
