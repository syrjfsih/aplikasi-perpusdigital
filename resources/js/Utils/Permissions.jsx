import { usePage } from "@inertiajs/react";

export default function hasAnyPermission(permissions) {
    const { auth } = usePage().props;

    const allPermissions = auth?.permissions ?? {};

    // Kalau object, pakai 'in'
    return permissions.some(permission => permission in allPermissions);
}
