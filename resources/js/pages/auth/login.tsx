import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import PasskeyVerify from '@/components/passkey-verify';
import { Lock, Mail } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Staff Login | Eazy's Cars" />

            <PasskeyVerify />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-5"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-5">
                            {/* Email Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Email address
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="admin@eazyscars.be"
                                        className="h-11 border-white/15 bg-[#090d14]/80 text-sm text-white placeholder:text-gray-500 focus:border-[#d8ad55] focus:ring-[#d8ad55]/25"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            {/* Password Field */}
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-xs text-[#d8ad55] hover:text-[#e5c479] hover:underline"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className="h-11 border-white/15 bg-[#090d14]/80 text-sm text-white placeholder:text-gray-500 focus:border-[#d8ad55] focus:ring-[#d8ad55]/25"
                                />
                                <InputError message={errors.password} />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center space-x-2.5 pt-1">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="border-white/20 data-[state=checked]:bg-[#d8ad55] data-[state=checked]:text-black"
                                />
                                <Label htmlFor="remember" className="text-xs text-gray-400 cursor-pointer font-normal">
                                    Keep me signed in
                                </Label>
                            </div>

                            {/* Login Button */}
                            <Button
                                type="submit"
                                className="mt-2 h-11 w-full rounded-lg bg-[#d8ad55] font-bold text-[#0d1117] shadow-lg shadow-[#d8ad55]/20 transition duration-200 hover:bg-[#c89c42] hover:shadow-[#d8ad55]/30 active:scale-[0.99]"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing ? (
                                    <Spinner className="mr-2" />
                                ) : (
                                    <Lock className="mr-2 size-4" />
                                )}
                                Sign In to Portal
                            </Button>
                        </div>
                    </>
                )}
            </Form>

            {status && (
                <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-center text-xs font-medium text-green-400">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Staff Portal Access',
    description: 'Enter your credentials to access the Eazy\'s Cars dashboard',
};
