import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

interface Props {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col mx-auto min-h-screen gap-4">
      <Header />
      <main className="max-w-7xl w-full mx-auto">{children}</main>
      <div className="flex flex-col justify-end grow">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;