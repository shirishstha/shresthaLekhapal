import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import axios from "axios"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "@/features/slice"

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        //testing for empty submission 
        if (!email || !password) {
            toast.error("Fill out the login credintials first");
            return
        }
        try {
            //sending login details to backend server
            const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/auth/login`, { email, password });
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(loginUser({user:res.data.user,token:res.data.token}));
                localStorage.setItem('userData',JSON.stringify({
                    token: res.data.token,
                    user: res.data.user
                }))
                navigate('/private/homepage');
            }

        } catch (error) {
            toast.error( error?.response?.data?.message);
            console.log("Error handeling login operation", error);
        }
    }

    return (
        <div className="bg-muted flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className="flex flex-col gap-6">
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <form className="p-6 md:p-8" onSubmit={handleLogin}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Welcome back</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Login to your account
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <div className="flex relative">
                                            <Input id="password" type={`${showPass ? "text" : "password"}`} required value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <div className="absolute right-3 top-2 cursor-pointer" onClick={() => setShowPass(!showPass)}>
                                                {showPass ? <Eye size={18} /> : <EyeOff size={18}/>}
                                            </div>
                                        </div>

                                    </div>
                                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-500" >
                                        Login
                                    </Button>
                                    <div
                                        className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                        <span className="bg-card text-muted-foreground relative z-10 px-2">
                                            Or continue with
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <Button variant="outline" type="button" className="w-full hover:bg-orange-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                    fill="currentColor" />
                                            </svg>
                                            <span className="sr-only">Login with Google</span>
                                        </Button>
                                    </div>

                                </div>
                            </form>
                            <div className="bg-muted relative hidden md:block">
                                <img
                                    src="/login_hero.webp"
                                    alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
                            </div>
                        </CardContent>
                    </Card>
                    <div
                        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}
