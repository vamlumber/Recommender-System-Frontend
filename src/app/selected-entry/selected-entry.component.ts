import { Component, OnInit } from '@angular/core';
// import {Codeblock} from 'ng2-prism/codeblock';
// import {Python} from 'ng2-prism/languages';

@Component({
  selector: 'app-selected-entry',
  templateUrl: './selected-entry.component.html',
  styleUrls: ['./selected-entry.component.css'],
  
})
export class SelectedEntryComponent implements OnInit {
  public barChartLabels = ['Alpha 0.01', 'Alpha 0.1', 'Alpha 1'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [57.1,61.8,54.5], label: 'Smoothing'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  myCode:string = `
  def count_matrix(self,all_text,vocab=None):
    indices = []
    indptr = []
    indptr.append(0)
    if vocab is None:
        vocabulary = defaultdict()
        vocabulary.default_factory = vocabulary.__len__
    else:
        vocabulary = vocab
    data = []
    for _id,row in all_text.iteritems():
        feature_counter = {}
        for word in row.split():
            try:
                index = vocabulary[word]
                if index not in feature_counter:
                    feature_counter[index] = 1
                else:
                    feature_counter[index] += 1
            except KeyError as k:
                continue
        indices.extend(feature_counter.keys())
        data.extend(feature_counter.values())
        indptr.append(len(indices))
    vocabulary = dict(vocabulary)
    try:
        indices = np.asarray(indices,dtype=object)
        indptr = np.asarray(indptr,dtype=np.int32)
        data = np.frombuffer(data,dtype=np.intc)
        count_mat = sp.csr_matrix((data,indices,indptr),shape=(len(indptr)-1,len(vocabulary)),dtype=np.float32)
    except Exception as e:
        print("csr",str(e))
    if vocab is None:
            return vocabulary,count_mat
    else:
      return count_mat`
  tfidf:string = `
  def tfidf(self,Y,_idfe=None):
    n_samples, n_features = Y.shape
    sum_frequency = np.ravel(np.sum(Y,axis=1)) # get sum of all the rows . To normalize the weight.
    r,c = Y.nonzero() # take row and column of non-zero positions
    tf = sp.csr_matrix(((1.0/sum_frequency)[r],(r,c)),shape=Y.shape) #get term frequency
    if _idfe is None:
        df = np.bincount(Y.indices, minlength=Y.shape[1]) # get frequencies of all unique terms in matrix  
        idf = np.log(Y.shape[0] / df) # Y.shape[0] give the no. of books / frequency of every term 
        idf = sp.diags(idf, offsets=0,shape=(n_features, n_features),format='csr',dtype=Y.dtype) # changing the matrix format for multiplication
    #         idf = np.asmatrix(idf)
    else:
        idf= _idfe
    tf_idf = tf * idf    
    #     Z = tf * idf
    if _idfe is None:
        return tf_idf,idf
    else:
      return tf_idf`
  multiNB:string = `
  def multinominalNB_fit(self,columns,X_t):
    feature_log_prob_list= []
    class_log_prior_list = []
    for i,col in enumerate(columns):
      col = np.concatenate((1-col.T,col.T),axis=1)
      classes = np.zeros(2,dtype=np.float64)
      feature_count = np.zeros((2,X_t.shape[1]),dtype=np.float64)
      feature_count = col.T * X_t # here we will get all terms that belong to class and its negation.
      classes = col.sum(axis=0) # number of books belonging to a particular genre 
      feature_count = feature_count + 0.1  # we add smoothing to all elements,therefore adding smaller value is prefered
      sum_prob = feature_count.sum(axis=1) # this sum gives the words that belong to particular class
      feature_log_prob_list.append(np.log(feature_count/(sum_prob.reshape(-1,1)+X_t.shape[1]))) # we calculate likelihood of each term with class.
      class_log_prior = (np.log(classes/classes.sum())) # we probablity of each class.
      class_log_prior_list.append(class_log_prior)
    return feature_log_prob_list,class_log_prior_list`
  hamming:string =`
  def hamming_score(y_true, y_pred):
    acc_list = []
    for i in range(y_true.shape[0]):
        set_true = set( np.where(y_true[i])[0] )
        set_pred = set( np.where(y_pred[i])[0] )
    
        tmp_a = None
        if len(set_true) == 0 and len(set_pred) == 0:
            tmp_a = 1
        else:
            tmp_a = len(set_true.intersection(set_pred))/float( len(set_true.union(set_pred)) )
        acc_list.append(tmp_a)
    return np.mean(acc_list)`
  cosi:string = `
  def cosine_similarity(self,X,I):
    return X * I.T`
  normalize:string =`
  def cosine_normalization(self,term_data,shape,term_indices,term_indptr):

        for i in range(shape[0]):
            sum_ = 0.0

            for j in range(term_indptr[i], term_indptr[i + 1]):
                sum_ += (term_data[j] * term_data[j])

            if sum_ == 0.0:
                continue
            sum_ = sqrt(sum_)
            for j in range(term_indptr[i], term_indptr[i + 1]):
                term_data[j] /= sum_
        return sp.csr_matrix((term_data,term_indices,term_indptr),shape=shape,dtype=np.float32)
  `
  constructor() { }

  ngOnInit() {
  }

}
