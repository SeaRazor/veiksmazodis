import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "@/app/UI/Navigation";
import localFont from 'next/font/local'


/*const poppins = localFont({src: './fonts/Poppins-Regular.ttf', variable: '--font-mono'});
const inter = localFont({src: './fonts/Inter.ttf', variable: '--font-mono'});*/
const rubik = localFont({src: './fonts/Rubik.ttf', variable: '--font-mono', weight: '400', display: 'swap'});
export const metadata = {
    title: "Kalbu!"
};


export default function RootLayout({children}) {

    return (
        <html lang="en">

        <body className={rubik.className}>

        <Navigation/>

        <div>{children}</div>
        </body>
        </html>
    );
}
