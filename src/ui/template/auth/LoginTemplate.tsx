
import { LoginForm } from "@/ui/organisms/auth/LoginForm"
export const LoginTemplate = () => {
    return (
        <div className="min-h-screen flex  items-center justify-center bg-miColorGradient">
            <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
                <LoginForm />
            </div>
        </div>
    )
}