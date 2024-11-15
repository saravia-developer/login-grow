export function formatData(info) {
  return info.data?.map((user, i) => {
    return {
      key: i + 1,
      id: user.id,
      usuario: user.usuario,
      correo: user.Correo,
      nombreCompleto: `${user.Nombre} ${user.Apell_paterno} ${user.Apell_materno}`,
      tipoUsuario: user.Tipo_usuario,
      available: false
    };
  })
}