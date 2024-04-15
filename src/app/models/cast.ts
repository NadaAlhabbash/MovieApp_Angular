export interface CastMember {
  id?: number;
  name?: string;
  original_name?: string;
  profile_path?: string | null;
}

export interface MovieCast {
  id?: number;
  cast?: CastMember[];
}
