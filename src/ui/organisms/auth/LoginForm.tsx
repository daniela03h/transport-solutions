"use client"

import { Button } from "@/ui/atoms/Button";
import { FormField } from "@/ui/molecules/common/FormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Icon } from '@iconify/react';
import { ILoginRequest } from "@/app/core/application/dto/auth/login-request.dto";


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo el obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener  al menos 8  caracteres")
    .required("La contraseña es obligatoria"),
});

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter()
  
  const handleLogin = async (data: ILoginRequest) => {
    console.log(data);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(`result`, result);

      if (result?.error) {
        console.log("Ocurrio un error", JSON.parse(result.error));
        JSON.parse(result.error)
        return;
      }
      router.push("/dashboard/services/vehicle")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
      <div className="flex justify-center">
      <Icon icon="fluent:vehicle-car-32-regular" width="50" height="50" className="text-primary"/>
      </div>
      <h2 className="text-2xl font-semibold text-center text-primary">Transport Solutions S.A</h2>
      <p className="text-xs">Inicia sesion en tu cuenta y gestiona tu flota de vehiculos</p>
      <FormField<ILoginRequest>
        control={control}
        type="email"
        label="Correo Electrónico"
        name="email"
        error={errors.email}
        placeholder="Ingresa tu correo"
      />
      <FormField<ILoginRequest>
        control={control}
        type="password"
        label="Contraseña"
        name="password"
        error={errors.password}
        placeholder="Ingresa tu contraseña"
      />
      <Button text="Iniciar Sesión" icon={ <Icon icon="uil:padlock" width="20" height="20" color="white"/> }/>
      <p className="text-xs text-center">¿Problemas para iniciar sesion? Contacta al administrador del sistema</p>
    </form>
  );
};