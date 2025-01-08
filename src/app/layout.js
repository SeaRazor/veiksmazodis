import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "@/app/UI/Navigation";
import localFont from 'next/font/local'
import {ThemeProvider} from "next-themes";


/*const poppins = localFont({src: './fonts/Poppins-Regular.ttf', variable: '--font-mono'});
const inter = localFont({src: './fonts/Inter.ttf', variable: '--font-mono'});*/
const rubik = localFont({src: './fonts/Rubik.ttf', variable: '--font-mono', weight: '400', display: 'swap'});
export const metadata = {
    title: "Treniruoklis"
};


export default function RootLayout({children}) {

    return (

        <html lang="en">
        <body className={rubik.className}>
        <ThemeProvider>
            <Navigation/>
            <div>{children}</div>
        </ThemeProvider>

        </body>
        </html>


    );
}
