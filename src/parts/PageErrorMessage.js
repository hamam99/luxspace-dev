import { Link } from 'react-router-dom'

function PageErrorMessage({
  title = '404 Not Found',
  body = 'Page Not Found',
}) {
  return (
    <section class="">
      <div class="container mx-auto min-h-screen">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full md:w-4/12 text-center">
            <img
              src="/images/content/illustration-success.png"
              alt="congrats illustration"
            />
            <h2 class="text-3xl font-semibold mb-6">{title}</h2>
            <p class="text-lg mb-12">{body}</p>
            <Link
              to="/"
              class="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageErrorMessage
