// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  // Kalau user gak ada (belum login) dan mau masuk halaman selain login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})