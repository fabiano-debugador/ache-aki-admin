import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Input from "../components/form/Input";
import Form from "../components/shared/Form";
import Modal from "../components/shared/Modal";
import Table from "../components/shared/Table";
import { getUserLocalStorage } from "../context/AuthProvider/util";
import { IProductCategory } from "../model/categoryProduct";
import { Api } from "../services/api";
import { queryClient } from "../services/queryClient";
import { omit } from "../utils/omit";

import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";

const ProductCategory: React.FC = () => {
  const id = getUserLocalStorage()?.id;
  const emptyCategory = {
    id: "",
    category: "",
    categorySlug: "",
    image: "",
  };

  const dt = useRef(null);

  const [category, setCategory] = useState<any>(emptyCategory);
  const [action, setAction] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const handleInput = (e: any, name: string) => {
    const value = e.target.value;
    const categoryValue = { ...category };
    categoryValue[name] = value;
    setCategory(categoryValue);
  };

  const handleUpload = (e: any, name: string) => {
    const value = e.target.files[0];
    const categoryValue = { ...category };
    categoryValue[name] = value;
    setCategory(categoryValue);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAction(false);
    setCategory(emptyCategory);
  };

  const updateCategory = async (datas: any) => {
    const categories = await listOfCategories();
    return categories;
  };

  const { mutate } = useMutation(updateCategory, {
    onSuccess: (data) => {
      queryClient.setQueryData(["product-category", category.id], data);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("product-category");
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const image = new FormData();
    image.append("image", category.image);

    if (!category.id) {
      const datas = { ...category, idLogin: id };
      Api.post("product/category", datas, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      mutate(category);
      closeModal();
    } else {
      if (!category.action) {
        const pickFields = omit(category, "id", "idLogin");
        await Api.put(`product/category/${category.id}`, pickFields, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        });
        mutate(category);
        closeModal();
      } else {
        Api.delete(`product/category/${category.id}`);
        mutate(category);
        closeModal();
      }
    }
  };

  const listOfCategories = async () => {
    const response = await Api.get("product/category/all/" + id);
    return response.data.category;
  };

  const { data } = useQuery<IProductCategory[]>(
    "product-category",
    listOfCategories
  );

  const categoryBodyTemplate = (rowData: any) => {
    return rowData.category
  }

  const categorySlugTemplate = (rowData: any) => {
    return rowData.categorySlug
  }

  const imageBodyTemplate = (rowData: any) => {
    return rowData.image
  }

  return (
    <>
      <DataTable value={data} ref={dt}>
        <Column field="category" header="Category" body={categoryBodyTemplate} />
        <Column field="categorySlug" header="Category Slug" body={categorySlugTemplate} />
        <Column field="image" header="Image" body={imageBodyTemplate} />
      </DataTable>

      {/* <button type="button" onClick={openModal}>
        show Modal
      </button>
      <Table
        header={["categoria", "Slug", "Image", "Ação"]}
        body={[data]}
        showColumns={["category", "categorySlug", "image"]}
        setAction={setAction}
        setProfile={setCategory}
      />

      <Modal handleClose={closeModal} show={isModalOpen || action}>
        <Form closeModal={closeModal} handleSubmit={handleSubmit}>
          <Input
            type="text"
            name="category"
            id="category"
            label="Category"
            values={category.category}
            onChange={(e: any) => handleInput(e, "category")}
          />
          <Input
            type="text"
            name="categorySlug"
            id="categorySlug"
            label="CategorySlug"
            values={category.categorySlug}
            onChange={(e: any) => handleInput(e, "categorySlug")}
          />

          <input
            type="file"
            name="image"
            id="image"
            onChange={(e: any) => handleUpload(e, "image")}
          />
        </Form>
      </Modal> */}
    </>
  );
};

export default ProductCategory;
