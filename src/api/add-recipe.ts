import { APIInstance } from '.';

import { RecipeData } from '@/lib/types';

const addRecipeAPI = async (recipe: RecipeData, video: File, image: File) => {
  const formData = new FormData();

  // working
  formData.append('title', recipe.title);
  formData.append('desc', recipe.desc);
  formData.append('difficulty', recipe.difficulty);
  formData.append('tag', recipe.tag);
  formData.append('files', video);
  formData.append('files', image);

  const res = await APIInstance.post('/recipe', formData);
  return res.data;
};

export default addRecipeAPI;
