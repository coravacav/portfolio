import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex h-full flex-col items-center justify-center text-white">
			<h2 className="text-3xl">Not Found</h2>
			<Link href="/">Return Home</Link>
		</div>
	);
}
