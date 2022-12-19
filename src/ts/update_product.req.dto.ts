import { OptionModel } from './model/option.model';
import { ProductModel } from './model/product.model';

export type UpdateProductDTO = Partial<Omit<ProductModel, 'createdAt'>> & {
  optionList?: OptionModel[];
};
