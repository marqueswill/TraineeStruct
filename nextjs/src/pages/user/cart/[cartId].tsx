`use client`;

import NavbarRestaurant from "@/components/NavbarRestaurant";
import ShowCartProduct from "@/components/ShowCartProduct";
import styles from "@/styles/Cart.module.css";
import { Cart, defaultCart } from "@/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  cart: Cart;
}> = async (context) => {
  const cartId = Number(context.query.cartId);
  const res = await fetch(`http://localhost:3000/api/user/cart/${cartId}`, {
    method: "GET",
  });

  let cart = defaultCart;
  if (res.ok) {
    cart = await res.json();
  }

  return { props: { cart } };
};

async function deleteAllCartProducts(cartId: number) {
  const res = await fetch(`http://localhost:3000/api/user/cart/${cartId}`, {
    method: "DELETE",
  });
}

export default function CartPage({
  cart,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: session } = useSession();

  console.log(cart);
  if (cart.id === 0 || !cart.user) {
    return (
      <div>
        <h1>Carrinho não encontrado</h1>
      </div>
    );
  }

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Faça login para continuar!");
      router.push(`/api/auth/signin`);
    },
  });

  if (status === `loading`) {
    return (
      <div>
        <h1>Faça Login!</h1>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* <NavbarRestaurant/> */}
      <div>
        <h1>MEU CARRINHO</h1>
      </div>
      {!cart.cartProduct || JSON.stringify(cart.cartProduct) === "[]" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap:"30px"
          }}
        >
          <h2>Adicione produtos ao carrinho</h2>
          <button
            onClick={() => {
              router.push(`/search`);
            }}
          >
            Pesquisar restaurantes
          </button>
        </div>
      ) : (
        cart.cartProduct && (
          <div className={styles.produtos}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.table_header}>
                  <th className={styles.coluna0}>RESTAURANTE</th>
                  <th className={styles.coluna1}>PRODUTO</th>
                  <th className={styles.coluna2}>PREÇO</th>
                  <th className={styles.coluna3}>QUANTIDADE</th>
                  <th className={styles.coluna4}>TOTAL</th>
                  <th className={styles.coluna5}>
                    <button
                      className={styles.trash_button}
                      onClick={() => {
                        if (
                          confirm("Deseja remover todos produtos do carrinho?")
                        ) {
                          deleteAllCartProducts(cart.id);
                          router.reload();
                        }
                      }}
                    >
                      <img
                        src="/images/icons/trash.png"
                        alt="lixo"
                        className={styles.trash}
                      />
                    </button>
                  </th>
                </tr>

                {cart.cartProduct &&
                  cart.cartProduct.map((cartProduct) => {
                    return <ShowCartProduct cartProduct={cartProduct} />;
                  })}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
}
