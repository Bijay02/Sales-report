import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to our Website!</h1>
      <Link href='/file-upload' className="text-blue-500 underline">
        Click here to upload a file
      </Link>
    </div>
  </div>
  
  )
}
