import React from 'react';
import UpdatePasswordForm from '../components/auth/UpdatePasswordForm';
import Layout from '../components/layout/Layout';

const UpdatePasswordPage = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
        <UpdatePasswordForm />
      </div>
    </Layout>
  );
};

export default UpdatePasswordPage;