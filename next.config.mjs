/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/verbs",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
