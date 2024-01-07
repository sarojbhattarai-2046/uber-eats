import UberEats from "@/components/Icons/uber-eats"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <header className="h-16 bg-black w-full px-16 flex items-center">
          <UberEats/>
        </header>
        <main className="h-screen">
          <section className="bg-gray w-[360px] my-0 mx-auto h-full">
            {children}
          </section>
        </main>
      </section>
    )
  }